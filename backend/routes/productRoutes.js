import express from 'express';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct('category');
    res.send(categories);
  })
);

productRouter.get('/search', async (req, res) => {
  const { query } = req;
    const pageSize = query.pageSize || 4;
    const page = query.page || 1;
    const category = query.category || '';
    const price = query.price || '';
    const rating = query.rating || '';
    const order = query.order || '';
    const searchQuery = query.query || '';

    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
            name: {
              $regex: searchQuery,
              $options: 'i',
            },
          }
        : {};
    const categoryFilter = category && category !== 'all' ? { category } : {};
    const ratingFilter =
      rating && rating !== 'all'
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};
    const priceFilter =
      price && price !== 'all'
        ? {
            price: {
              $gte: Number(price.split('-')[0]),
              $lte: Number(price.split('-')[1]),
            },
          }
        : {};
    const sortOrder =
      order === 'featured'
        ? { featured: -1 }
        : order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : order === 'newest'
        ? { createdAt: -1 }
        : { _id: -1 };

    const products = await Product.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countProducts = await Product.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })

productRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.send(products);
})

productRouter.get('/slug/:slug', async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug })
    if(product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product Not Found'})
    }
})


productRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
});

productRouter.delete('/del/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server Error' });
  }
});

productRouter.put('/edit/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.countInStock = req.body.countInStock || product.countInStock;
      product.rating = req.body.rating || product.rating;
      product.price = req.body.price || product.price;

      const updatedProduct = await product.save();
      res.send(updatedProduct);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server Error' });
  }
});



export default productRouter;
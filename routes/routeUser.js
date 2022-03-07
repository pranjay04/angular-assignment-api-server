const router = require('express').Router();
const api = require('../api');

router.get('/', async (req, res) => {
  await api.user
    .getAllUsers()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post('/', async (req, res) => {
  await api.user
    .createUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete('/:id', async (req, res) => {
  await api.user
    .deleteUserById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.patch('/', async (req, res) => {
  await api.user
    .updateUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;

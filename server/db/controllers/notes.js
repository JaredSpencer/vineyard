import Notes from '../models/notes';

const newNote = (req, res, next) => {
  return Notes.create({
    title: req.body.title,
    text: req.body.text,
    location: req.body.location,
    image: req.body.image
  })
  .then((note) => {
    if (note) {
      res.json(note);
    }
    next();
  }).catch((err) => {
    console.log('could not add note ', err);
  });
};

// AS AN ALTERNATIVE TO THE ORIGINAL FUNCTION, THIS WOULD RUN DEPENDING ON PROPERTIES ON THE REQ.BODY. YOU CAN THEN BUILD OUT GETNOTES IN THE SAME FASHION.
// IF WE'RE PERSISTING ORGANIZATION, ETC., ON THE CLIENT SIDE, THEN WE CAN SEND THAT INFO IN WITH EACH REQUEST.
const getNote = (req, res, next) => {
  if (req.body.title) {
    return Notes.find({
      where: {
        title: req.body.title
      }
    })
    .then((note) => {
      if (note) {
        res.json(note);
      }
      next();
    }).catch((err) => {
      console.log('could not find note ', err);
    });
  } else if (req.body.location) {
      return Notes.find({
        where: {
          location: req.body.location
        }
      })
      .then((note) => {
        if (note) {
          res.json(note);
        }
        next();
      }).catch((err) => {
        console.log('could not find note ', err);
      });
  }
};

const getNote = (req, res, next) => {
  return Notes.find({
    where: Sequelize.or({
      text: req.body.text
    },
    {
      location: req.body.location
    });
  })
  .then((note) => {
    if (note) {
      res.json(note);
    }
    next();
  }).catch((err) => {
    console.log('could not find note ', err);
  });
};
// QUESTION: DO I SEARCH FOR NOTES FOR A SPECIFIC PLACE OR VINEYARD? I CAN'T IMAGINE EVER REQUESTING ALL NOTES.
const getNotes = (req, res, next) => {};
const updateNote = (req, res, next) => {};
const deleteNote = (req, res, next) => {};

export default {
  newNote,
  getNote,
  getNotes,
  updateNote,
  deleteNote
}

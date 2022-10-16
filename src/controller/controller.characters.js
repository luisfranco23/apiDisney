const Characters = require("../models/characters.model");
const uuid = require("uuid");

const registerCharacter = async (data, image) => {
  const newCharacter = await Characters.create(
    {
      id: uuid.v4(),
      nameCharacter: data.nameCharacter,
      age: data.age,
      urlImage: image,
      weigth: data.weigth,
      history: data.history,
      movieId: data.movieId,
    },
    {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    }
  );
  return newCharacter;
};

const getAllCharacters = async () => {
  const data = await Characters.findAll({
    attributes: {
      exclude: [
        "createdAt",
        "updatedAt",
        "age",
        "weigth",
        "history",
        "movieId",
      ],
    },
  });
  return data;
};

const getCharacterById = async (id) => {
  const result = await Characters.findOne({
    where: {
      id,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return result;
};

const updateCharacterById = async (id, data) => {
  const dataUpdate = await Characters.update(
    {
      nameCharacter: data.nameCharacter,
      age: data.age,
      urlImage: data.urlImage,
      weigth: data.weigth,
      history: data.history,
      movieId: data.movieId,
    },
    {
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt"],
      },
    }
  );
  return dataUpdate;
};

const deleteCharacterById = async (id) => {
  const dataDelete = await Characters.destroy({
    where: {
      id,
    },
  });
  return dataDelete;
};

const seacrhName = async (name) => {
  const character = await Characters.findAll({
    where: {
      nameCharacter: name,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return character;
};

const seacrhAge = async (age) => {
  const character = await Characters.findAll({
    where: {
      age,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return character;
};

const seacrhMovieId = async (movie) => {
    const character = await Characters.findAll({
        where: {
            movieId : movie
        }
    })
    return character
}

module.exports = {
  registerCharacter,
  getAllCharacters,
  updateCharacterById,
  deleteCharacterById,
  getCharacterById,
  seacrhName,
  seacrhAge,
  seacrhMovieId
};

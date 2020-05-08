require("dotenv").config();
const db = require("./models");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECT,
  { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("DB connected successfully!")
);

const users = [
  { username: "username", password: "password" },
  { username: "kaung san hein", password: "kaungsanhein" },
];

const polls = [
  {
    question: "Which is the best JavaScript framework",
    options: ["Angular", "React", "VueJS"],
  },
  {
    question: "Who is the best mutant",
    options: ["Wolverine", "Deadpool"],
  },
  {
    question: "Truth or Dare",
    options: ["Truth", "Dare"],
  },
  {
    question: "Boolean?",
    options: ["True", "False"],
  },
];

const seed = async () => {
  try {
    await db.User.remove();
    console.log("Drop All Users");

    await db.Poll.remove();
    console.log("Drop All Polls");

    await Promise.all(
      users.map(async (user) => {
        const data = await db.User.create(user);
        await data.save();
      })
    );
    console.log("Created Users", JSON.stringify(users));

    await Promise.all(
      polls.map(async (poll) => {
        poll.options = poll.options.map((option) => ({ option, votes: 0 }));
        const data = await db.Poll.create(poll);
        const user = await db.User.findOne({ username: "username" });
        data.user = user;
        user.polls.push(data._id);
        await data.save();
        await user.save();
      })
    );
    console.log("Created Polls", JSON.stringify(polls));
  } catch (error) {
    console.log(error);
  }
};

seed();

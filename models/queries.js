const userGetAll = `
    SELECT * FROM user;
`;

const userPost = `
    INSERT INTO user SET ?;
`;

module.exports = {
    userGetAll,
    userPost,
};

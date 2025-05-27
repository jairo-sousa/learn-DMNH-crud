const getAll = `
    SELECT * FROM user;
`;

const post = `
    INSERT INTO user SET ?;
`;

const update = `
    UPDATE user SET ? WHERE userName = ?;
`;

const remove = `
    DELETE FROM user WHERE userName = ?;
`;

module.exports = {
    getAll,
    post,
    update,
    remove,
};

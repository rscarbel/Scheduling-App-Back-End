const isAuthenticated = require("../bin/isAuthenticated");

describe ('is Authenticated', () => {
  const next = () => {return};
  const req1 = {session: {user: 'billy'}}
  const req2 = {session: {user: undefined}}
  const req3 = {};
  const res = {send: function(message){ return message.error}};

  test ('it should not return anything if there is a user', () => {
    expect(isAuthenticated(req1,res,next)).toBe(undefined);
  });

  test ('it should send an error message response if there not a user', () => {
    expect(isAuthenticated(req2,res,next)).toBe('You need to be logged in first.');
  });

  test ('it should send an error message response if a session without a user was passed in', () => {
    expect(isAuthenticated(req3,res,next)).toBe('You need to be logged in first.');
  });
})
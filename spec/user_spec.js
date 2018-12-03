describe("User", function() {

  beforeEach(function() {
    user = new User();
  });

    it('User signs up - sets username, email and password', function() {
      user.signup('kie', 'test@test.com', 'pass123');
        expect(user.username).toEqual('kie')
        expect(user.email).toEqual('test@test.com')
        expect(user.password).toEqual('pass123')
    });

    it('User can sign in with correct details', function() {
      user.signup('kie', 'test@test.com', 'pass123');
      user.signin('kie','pass123')
        expect(user.login).toEqual(true)
    });

    it('User cannot login with incorrect username', function() {
      user.signup('kie', 'test@test.com', 'pass123');
        expect(function() {
          user.signin('bob','pass123');
        }).toThrowError('Incorrect username');
    });

    it('User cannot login with incorrect password', function() {
      user.signup('kie', 'test@test.com', 'pass123');
        expect(function() {
          user.signin('kie','wrongpass');
        }).toThrowError('Incorrect password');
    });

  });

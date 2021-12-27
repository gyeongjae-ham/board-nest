import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from './user.repository';

describe('AuthService', () => {
  let service: AuthService;
  let repository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
    repository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // describe('signUp', () => {
  //   it('should create user', async () => {
  //     repository.createUser({
  //       username: 'test',
  //       password: 'abc123',
  //     });

  //     const user = await service.signIn({
  //       username: 'test',
  //       password: 'abc123',
  //     });

  //     expect(user.accessToken).toHaveReturned();
  //   });
  // });
});

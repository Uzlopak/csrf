import { expectError, expectType } from "tsd";
import { Tokens } from ".";

Tokens();
new Tokens();
Tokens({});
new Tokens({});
Tokens({ saltLength: 10 });
Tokens({ secretLength: 10 });
Tokens({ userInfo: true });
Tokens({ validity: 10000 });
new Tokens({ saltLength: 10 });
new Tokens({ secretLength: 10 });
new Tokens({ userInfo: true });
new Tokens({ validity: 10000 });

expectError(Tokens('secret'))
expectError(new Tokens('secret'))

expectError(new Tokens({}).create('secret', 'userInfo'));
expectError(new Tokens({ userInfo: false}).create('secret', 'userInfo'));
expectError(new Tokens({ userInfo: true }).create('secret'));

expectError(new Tokens({}).verify('secret', 'token', 'userinfo'));
expectError(new Tokens({ userInfo: false}).verify('secret', 'token', 'userInfo'));
expectError(new Tokens({ userInfo: true }).verify('secret', 'token'));

expectType<Promise<string>>(Tokens().secret());
expectType<Promise<string>>(new Tokens().secret());

expectType<void>(Tokens().secret((err, secret ) => {
  expectType<Error| null>(err)
  expectType<string>(secret)
}));
expectType<void>(new Tokens().secret((err, secret ) => {
  expectType<Error| null>(err)
  expectType<string>(secret)
}));

expectType<string>(Tokens().secretSync())
expectType<string>(new Tokens().secretSync())

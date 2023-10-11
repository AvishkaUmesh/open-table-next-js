interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

function AuthModalInputs({ inputs, inputHandler, isSignIn }: Props) {
  return (
    <div>
      {!isSignIn && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="First Name"
            name="firstName"
            value={inputs.firstName}
            onChange={inputHandler}
          />
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="Last Name"
            name="lastName"
            value={inputs.lastName}
            onChange={inputHandler}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="w-full rounded border p-2 py-3"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={inputHandler}
        />
      </div>
      {!isSignIn && (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="Phone"
            name="phone"
            value={inputs.phone}
            onChange={inputHandler}
          />
          <input
            type="text"
            className="w-[49%] rounded border p-2 py-3"
            placeholder="City"
            name="city"
            value={inputs.city}
            onChange={inputHandler}
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          name="password"
          className="w-full rounded border p-2 py-3"
          placeholder="Password"
          value={inputs.password}
          onChange={inputHandler}
        />
      </div>
    </div>
  );
}
export default AuthModalInputs;

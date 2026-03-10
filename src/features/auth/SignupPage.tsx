import { Button } from "../../components/Button";

interface SignupPageProps {
  username: string;
  isSigningUp: boolean;
  onUsernameChange: (value: string) => void;
  onSignUp: () => void;
}

export function SignupPage({
  username,
  isSigningUp,
  onUsernameChange,
  onSignUp,
}: SignupPageProps) {
  const isDisabled = username.trim().length === 0 || isSigningUp;

  return (
    <main className="min-h-screen bg-[#DDDDDD]">
      <div className="flex min-h-screen items-center justify-center px-4">
        <section className="w-full max-w-125 rounded-2xl border border-[#CCCCCC] bg-white px-6 py-7 shadow-none">
          <h1 className="mb-6 text-[22px] font-bold leading-6.5 text-black">
            Welcome to CodeLeap network!
          </h1>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-base font-normal leading-4.75 text-black"
            >
              Please enter your username
            </label>

            <input
              id="username"
              type="text"
              placeholder="John doe"
              value={username}
              onChange={(event) => onUsernameChange(event.target.value)}
              disabled={isSigningUp}
              className="h-8 w-full rounded-lg border border-[#777777] px-2.75 text-sm text-black outline-none placeholder:text-[#CCCCCC]"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <Button disabled={isDisabled} onClick={onSignUp}>
              {isSigningUp ? "ENTERING..." : "ENTER"}
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

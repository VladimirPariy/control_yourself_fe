import AuthImg from '@assets/images/auth-image.png';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <main className="h-full w-full flex overflow-hidden">
      <img src={AuthImg} alt="auth image" className="w-full h-full object-cover absolute" />
      <section className="absolute z-10 w-full h-full flex justify-center items-center">
        <div className="w-135 max-w-[90%] bg-black/80 rounded-2xl px-16 py-12 flex flex-col gap-8 text-white overflow-y-auto max-h-[80%]">
          {props.children}
        </div>
      </section>
    </main>
  );
}

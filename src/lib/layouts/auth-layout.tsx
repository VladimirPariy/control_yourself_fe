import AuthImg from '@assets/images/auth-image.webp';

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <main className="h-full w-full flex">
      <img src={AuthImg} alt="auth image" className="w-full h-full object-cover absolute" />
      <section className="absolute z-10 w-full h-full flex justify-center items-center">
        <div className="w-135 bg-black/80 rounded">{props.children}</div>
      </section>
    </main>
  );
}

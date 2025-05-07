export const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-primary"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-tertiary animate-spin"></div>
      </div>
      <h1 className="text-xl mt-5">Cargando...</h1>
    </div>
  );
};

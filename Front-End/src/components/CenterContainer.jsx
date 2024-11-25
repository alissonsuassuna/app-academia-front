
function CenterContainer({children, title} ){
    return (
        <div className="min-h-screen bg-zinc-400 flex items-center justify-center p-5 min-w-0.5">
          <div className="bg-zinc-200 p-8 rounded-md shadow-lg w-auto">
            <h1 className="text-2xl font-bold text-center text-purple-500">{title}</h1>
            {children}
          </div>
        </div>
      );
};

export default CenterContainer
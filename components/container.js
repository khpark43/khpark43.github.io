export default function container({ children, title }) {
  if (title) {
    return (
      <div className="mx-auto mt-5 mb-20 w-96">
        <h1 className="font-regular text-center text-4xl mb-2"> {title} </h1>
        <div className="bg-blue-500 w-3/4 h-1 mb-5 mx-auto rounded"></div>
        <div className="leading-7 w-96">{children}</div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto lg:w-1/3 md:w-2/3 sm:w-4/5 w-5/6 mt-5 mb-20">
        <div className="leading-7 w-96">{children}</div>
      </div>
    );
  }
}

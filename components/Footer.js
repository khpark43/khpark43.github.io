import Contact from "./Contact";
export default function Footer() {
  return (
    // mx-auto w-96
    <div className="text-center mt-10 pb-12">
      <span className="hover:underline decoration-4 decoration-blue-300 underline-offset-4">
        <a href="mailto:joshuahp0403@gmail.com"> joshuahp0403@gmail.com </a>
      </span>
      <div className="mx-auto w-40">
        <ul className="flex justify-between m-4">
          <Contact icon="github" href="https://github.com/khpark43" />
          <Contact icon="twitter" />
          <Contact icon="google" />
          <Contact icon="instagram" />
        </ul>
      </div>
      <div className="text-xs mt-4">
        Copyright ⓒ 2022 Kyunghyun Park. All rights reserved.
      </div>
    </div>
  );
}

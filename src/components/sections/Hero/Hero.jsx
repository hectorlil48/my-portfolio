import Intro from "./Intro";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-inter mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between gap-10 px-8 py-24 lg:flex-row"
    >
      <Intro />
      <aside
        role="presentation"
        className="bg-code-bg w-full max-w-md rounded-2xl border border-gray-200 p-6 shadow-sm shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] transition-colors duration-300"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex space-x-2">
            <div
              aria-hidden="red circle"
              className="h-3 w-3 rounded-full bg-red-500"
            ></div>
            <div
              aria-hidden="yellow circle"
              className="h-3 w-3 rounded-full bg-yellow-500"
            ></div>
            <div
              aria-hidden="green circle"
              className="h-3 w-3 rounded-full bg-green-500"
            ></div>
          </div>

          <div className="text-sm text-gray-400">developer.js</div>
        </div>
        <div className="space-y-2 font-mono text-sm">
          <p className="text-gray-500">// Full-Stack Developer</p>
          <p>
            <span className="text-pink-500">const </span>
            <span className="text-blue-400">developer </span>
            <span className="text-gray-400">= </span>
            <span className="text-orange-600">&#123;</span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">name</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-600">'Hector Ramirez'</span>
            <span className="text-gray-400">,</span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">skills</span>
            <span className="text-gray-400">: </span>
            <span className="text-orange-600">&#91;</span>
            <span className="text-green-600">'React'</span>
            <span className="text-gray-400">, </span>
            <span className="text-green-600">'Node.js'</span>
            <span className="text-gray-400">, </span>
            <span className="text-green-600">'MongoDB'</span>
            <span className="text-orange-600">&#93;</span>
            <span className="text-gray-400">, </span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">focuses</span>
            <span className="text-gray-400">: </span>
            <span className="text-orange-600">&#91;</span>
            <span className="text-green-600">'Full-Stack'</span>
            <span className="text-gray-400">, </span>
            <span className="text-green-600">'Frontend'</span>
            <span className="text-orange-600">&#93;</span>
            <span className="text-gray-400">, </span>
          </p>
          <p className="pl-6">
            <span className="text-purple-400">learning</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-600">'Always'</span>
            <span className="text-gray-400">, </span>
          </p>
          <p>
            <span className="text-orange-600">&#125;</span>
            <span className="text-gray-400">;</span>
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Hero;

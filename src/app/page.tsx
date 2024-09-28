import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="w-screen px-3 py-16">
        <div className="w-fit flex flex-col m-auto h-5/6">
          <h1 className="font-black text-8xl mb-5">
            <span className="text-primaryColor uppercase">prjkt</span>:Morpheus
          </h1>
          <p className="text-4xl text-center">Take Your Dreams to Reality</p>
        </div>
      </section>

      <section className="w-screen py-14 px-3">
        <div className="w-fit flex flex-col m-auto">
          <p>features</p>
        </div>
      </section>

      <section className="w-screen py-14 px-3">
        <div className="w-fit flex flex-col m-auto">
          <p>What Our Users Say</p>
        </div>
      </section>

      <section className="w-screen py-14 px-3">
        <div className="w-fit flex flex-col m-auto">
          <p>about morpheus</p>
          <p>Morpheus was born from a simple idea: that great innovations start with capturing and nurturing our thoughts. Our team of dreamers and doers created this platform to empower individuals and teams to turn their ideas into reality.</p>
          <p>Join us in our mission to unlock the world's creativity and bring more ideas to life.</p>
        </div>
      </section>

      <section className="w-screen py-14 px-3">
        <div className="w-fit flex flex-col m-auto">
          <p className="text-black text-5xl">Ready to Capture Your Next Big Idea?</p>
          <p>Join thousands of innovators who trust Morpheus to manage their ideas and projects.</p>
          <form>
            <input type='email' placeholder="Enter Your Email" />
            <input type='submit' value='Get Started' />
          </form>
          <p>By signing up, you agree to our <Link href="/tos">Terms & conditions</Link></p>
        </div>
      </section>
    </>
  );
}

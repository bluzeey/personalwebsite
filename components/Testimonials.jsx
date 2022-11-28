import React from "react";

function Testimonials() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-second-gradient-color pt-2 pb-2">Testimonials</h1>
      <section className="text-center">
        <div className="flex justify-center">
          <div className="max-w-3xl">
            <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
              <div className="md:flex md:flex-row">
                <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                  <img
                    src="https://pbs.twimg.com/profile_images/1495768383979077634/jvtsjevD_400x400.jpg"
                    className="rounded-full shadow-md"
                    alt="woman avatar"
                  />
                </div>
                <div className="md:ml-6">
                  <p className="text-gray-500 font-light mb-6 text-left">
                    We had the pleasure of working with Sahil for a short
                    internship, collaborating on the frontend development and
                    product side of the product. I was impressed by Sahil’s
                    ability to handle really broad and vague tasks effortlessly.
                    All we need to do was giving Sahil a goal. He was able to
                    consider all perspectives of the goals, asked questions we
                    failed to noticed, and complete them with high quality. He
                    has the ability to find and treat the root causes of
                    problems instead of just the symptoms. I’ve enjoyed my
                    experience working with Sahil, and I know that anyone
                    looking to hire or work with him will too.
                  </p>
                  <p className="font-semibold text-xl mb-2 text-gray-800">Lan Li</p>
                  <p className="font-semibold text-gray-500 mb-0">
                    Product manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

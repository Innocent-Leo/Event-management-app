import React from "react";
import { data } from "../../data";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-8 px-42 pb-10">
      <div>
        <h1 className="text-orange title font-semibold">Notable Mentions</h1>
        <div className="bg-light-orange mt-0.50 h-1.25 w-16.5 rounded-md"></div>
      </div>

      <div className="flex gap-10">
        {data.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col items-center justify-center gap-4 text-[10px]"
          >
            <div className="bg-grey-0 relative rounded-xl px-4 py-6">
              <p className="">{testimonial.content.slice(0, 239)}...</p>

              <div className="bg-grey-0 absolute -bottom-1 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45"></div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <img
                src={testimonial.image}
                alt="{testimonial.name}"
                className="mb-1.5 size-15"
              />

              <p className="font-semibold">{testimonial.name}</p>

              <p>{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

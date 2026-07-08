import React from "react";
import { GoPencil } from "react-icons/go";

const AboutMe = () => {
  return (
    <div className="bg-light-cyan/20 relative mx-35 my-6 rounded-3xl p-10">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
        officia eos, ut amet voluptatem delectus ducimus dolores laborum
        explicabo, reprehenderit numquam suscipit. Dolore reiciendis laboriosam
        consectetur ea aspernatur quisquam? Iste earum incidunt cupiditate
        recusandae delectus. Dolorem ducimus est facere ea nemo. Hic at vel
        iste, odio impedit vero repellat alias. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Assumenda culpa, placeat necessitatibus
        amet architecto temporibus ullam praesentium rerum impedit similique
        recusandae eum, obcaecati excepturi, consectetur corrupti. Numquam
        reprehenderit, illum explicabo delectus iste consequatur? Sapiente
        dolore ea atque distinctio omnis reiciendis beatae aspernatur harum quos
        eum deleniti molestias reprehenderit eveniet autem maxime commodi,
        accusantium illo accusamus. Voluptatem nostrum cum nulla laboriosam
        sint, velit molestias dolore porro, incidunt repellendus facere dolorum
        eligendi quidem excepturi, debitis blanditiis dolor accusantium iusto
        aliquid molestiae ea expedita ratione. Itaque nihil velit adipisci,
        laboriosam tempore est culpa commodi eligendi omnis, aut dolor non,
        exercitationem optio in maxime!
      </p>

      <div className="absolute top-5 right-5 rounded-full bg-white p-1.5">
        <GoPencil size={14} />
      </div>
    </div>
  );
};

export default AboutMe;

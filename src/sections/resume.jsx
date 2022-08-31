import React from "react";
import Sect from "../components/resumesects";
const Resume = () => {
  return (
    <div>
      <section className="resume">
        <div className="w-screen min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center drop-shadow-lg">
            <div className="text-4xl text-white font-bold">My Resume</div>
            <div className="flex flex-row">
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[2px] border-black"></div>
              <div className="w-[35px] m-2 bg-transparent h-[15px] border-b-[1px] border-white"></div>
            </div>
            <div className="flex flex-col w-[80vw] md:flex-row">
              <div className="flex flex-col w-[100%]">
                <h1 className="text-white text-3xl font-bold text-left p-7 mt-10">
                  Experiences
                </h1>
                <Sect
                  sNo={"1"}
                  year={"2014-now"}
                  head={"Founder & Ctreative Director"}
                  subHead={"Kyros Studio"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                  }
                />
                <Sect
                  sNo={"2"}
                  year={"2010-2014"}
                  head={"Senior UI/UX Designer"}
                  subHead={"Google Inc"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                  }
                />
                <Sect
                  sNo={"3"}
                  year={"2008 - 2010"}
                  head={"Graphic Designer"}
                  subHead={"Kyros Studio"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                  }
                />
              </div>
              <div className="flex flex-col w-[100%]">
                <h1 className="text-white text-3xl font-bold text-left p-7 mt-10">
                  Education
                </h1>
                <Sect
                  sNo={"1"}
                  year={"2004-2008"}
                  head={"Master in Design"}
                  subHead={"New York University"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                  }
                />
                <Sect
                  sNo={"2"}
                  year={"2004-2008"}
                  head={"Bachelor of Arts"}
                  subHead={"University of London"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                  }
                />
                <Sect
                  sNo={"3"}
                  year={"2006 - 2004"}
                  head={"Artist of College"}
                  subHead={"University of Sydney"}
                  desc={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;

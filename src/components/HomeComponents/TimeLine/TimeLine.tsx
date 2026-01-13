import TimeLineItem from './TimeLineItem'
import turing_machine_image from '@assets/home_page_images/turing_machine_image.png';

const TimeLine = () => {
  return (
    <>
      <section className="grid md:grid-cols-12 grid-cols-10 py-5 px-2">
        {/* Left Time Line Items */}
        <div className="md:col-start-1 md:col-end-6 col-start-2 col-end-9 flex flex-col justify-start items-end space-y-10">
          <TimeLineItem 
            title='2022 Sept'
            subtitle='Numerical Tic Tac Toe'
            content='The very first project, a simple console app with an AI player'
            align="right"
            titleSize='lg:text-2xl text-lg'
            subtitleSize='lg:text-xl text-base'
            contentSize='md:text-base text-sm'
          />

          <div className="md:hidden">
            <TimeLineItem 
              title='2024 Sept'
              subtitle='Visual Recognition'
              content='For my AI course, I extracted and implemented a simple AI system to identify cats and dogs'
              align="right"
              titleSize='lg:text-2xl text-lg'
              subtitleSize='lg:text-xl text-base'
              contentSize='md:text-base text-sm'
            />
          </div>
          
          <div className="md:mt-40">
            <TimeLineItem 
              title='2025 Jan'
              subtitle='Turing Machine Puzzle'
              content='A project that I work with brilliant groupmates. A website game where player build Turing machines to complete tasks'
              align="right"
              titleSize='lg:text-2xl text-lg'
              subtitleSize='lg:text-xl text-base'
              contentSize='md:text-base text-sm'
            />
          </div>
          
          <img src={turing_machine_image}
            alt="Turing Machine Puzzle"
            className="self-center md:hidden"
          />

          <div className="md:hidden">
              <TimeLineItem 
                title='2025 Jun'
                subtitle='Party Game Project'
                content='A project for learning backend dev. A main party game consists of many mini games'
                align="right"
                titleSize='lg:text-2xl text-lg'
                subtitleSize='lg:text-xl text-base'
                contentSize='md:text-base text-sm'
              />
          </div>
        </div>

        {/* Green Divider */}
        <div className="h-full w-[16px] bg-[#849F5D] md:col-start-7 md:col-end-7 col-start-10 col-end-10"></div>

        {/* Right Time Line Items (Hidden for sm) */}
        <div className="md:col-start-8 md:col-end-12 hidden md:flex flex-col justify-start items-end space-y-15 mt-30">
          <TimeLineItem 
              title='2024 Sept'
              subtitle='Visual Recognition'
              content='For my AI course, I extracted and implemented a simple AI system to identify cats and dogs'
              align="left"
              titleSize='lg:text-2xl text-lg'
              subtitleSize='lg:text-xl text-base'
              contentSize='md:text-base text-sm'
            />

          <img src={turing_machine_image}
            alt="Turing Machine Puzzle"
            className="self-center"
          />

          <TimeLineItem 
              title='2025 Sept'
              subtitle='Home Safety Game Project'
              content='A project for my final year project, aiming to raise safety awareness through interactive game'
              align="left"
              titleSize='lg:text-2xl text-lg'
              subtitleSize='lg:text-xl text-base'
              contentSize='md:text-base text-sm'
            />
        </div>
      </section>
    </>
  )
}

export default TimeLine
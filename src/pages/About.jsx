import React, {useEffect, useReducer} from 'react'
import { RxPerson } from 'react-icons/rx'
import SubtitleComponent from '../components/subtitle/SubtitleComponent'


function About() {

  const text = `Hello there! I'm Dounya Mellouki, a passionate web developer with a creative background in UI/UX design. 
    With an unwavering curiosity and an eye for aesthetic detail, I embarked on my journey in the digital realm as a UI/UX designer. 
    Through countless hours of honing my skills and immersing myself in the world of web development, I discovered my true calling. 
    Today, I proudly stand as a versatile web developer, 
    combining the best of both design and development worlds to craft captivating and functional online experiences. 
    I am driven by a deep love for code, a fervent desire to bring ideas to life, and an unwavering commitment to delivering exceptional results. 
    From crafting elegant user interfaces to architecting robust backend systems, I thrive on the challenges that each project brings. With every line of code, 
    I strive to create seamless, user-centric experiences that leave a lasting impact. I am constantly seeking new opportunities to learn, grow,
    and collaborate on exciting projects that push the boundaries of innovation. Together, let's turn your digital vision into reality.`;

  const typingReducer = (state, action) => {
    switch (action.type) {
      case 'typeCharacter':
        return { ...state, displayText: state.displayText + action.character };
      case 'incrementIndex':
        return { ...state, currentIndex: state.currentIndex + 1 };
      default:
        return state;
    }
  };

  const initialState = {
    displayText: '',
    currentIndex: 0
  };

  const [state, dispatch] = useReducer(typingReducer, initialState);

  useEffect(() => {
    const { currentIndex } = state;
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: 'typeCharacter', character: text[currentIndex] });
        dispatch({ type: 'incrementIndex' });
      }, 50); // Adjust typing speed here (in milliseconds)

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [state, text]);

  return (
    <div>
      <div className=''>        
        <SubtitleComponent text='About' icon={RxPerson} />
      </div>
      <div className='  tracking-wide my-[6vh]'>
        <h2 className='font-light'>
        Bridging Creativity and Functionality
        <br />
        Meet<span className='font-semibold text-rose-500'> Dounya</span>
        </h2>
      </div>
      <div>
      <p className="text-[18px] h-[50vh] text-gray-400 w-[95%] leading-loose">
      {state.displayText}
    </p>
      </div>
    </div>
  )
}

export default About

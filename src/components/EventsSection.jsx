import { useState } from 'react';
import { useSprings, animated, to } from 'react-spring';
import { CardMedia, styled, Card, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import eventsData from './events.json'; // Assuming you have events.json

const Wrapper = styled('div')(() => ({
  zIndex: 2,
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '4rem',
  '.swipe__card': {
    position: 'absolute',
    width: '600px', // Increased width here for desktop view
    height: '450px', // Adjust height to fit both image and description
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'transform',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.5s ease-out',
    '@media (max-width: 768px)': {
      width: '300px', // Smaller width for mobile view
      height: '300px', // Smaller height for mobile view
    },
  },
}));

const StyledCard = styled(Card)(() => ({
  boxShadow: 'rgba(0, 0, 0, 0.1) 2px 5px 27px !important',
  cursor: 'grabbing',
  width: '600px',  // Larger width for desktop view
  height: '450px', // Adjust height for desktop view
  position: 'relative',
  display: 'flex',
  flexDirection: 'column', // Align content vertically
  '@media (max-width: 768px)': {
    width: '300px', // Adjust width for mobile
    height: '300px', // Adjust height for mobile
  },
}));

const ArrowWrapper = styled('div')(() => ({
  position: 'absolute',
  bottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  padding: '0 20px',
  '@media (max-width: 768px)': {
    bottom: '10px', // Adjust positioning for mobile view
    padding: '0 10px', // Smaller padding for mobile view
  },
}));

const toConfig = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -5 + Math.random() * 10,
  delay: i * 100,
});

const fromConfig = () => ({ x: 1000, rot: 0, scale: 1.5, y: 0 });

const trans = (r, s) => `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const SwipeCards = () => {
  const [leftGone, setLeftGone] = useState([]); // Stack to track cards moved left
  const [rightGone, setRightGone] = useState([]); // Stack to track cards moved right
  const [springs, setSprings] = useSprings(eventsData.length, (i) => ({
    ...toConfig(i),
    from: fromConfig(),
  }));

  const resetCards = () => {
    setLeftGone([]);
    setRightGone([]);
    setSprings((i) => toConfig(i));
  };

  const handleNext = () => {
    if (leftGone.length > 0) {
      const index = leftGone.pop();
      setLeftGone([...leftGone]);
      setSprings((i) => {
        if (i === index) {
          return { x: 0, rot: 0, scale: 1, config: { tension: 500 } };
        }
        return { x: 0, rot: 0, scale: 1, config: { tension: 500 } };
      });
    } else {
      const nextGone = [...rightGone, rightGone.length];
      setRightGone(nextGone);
      setSprings((i) => {
        if (nextGone.includes(i)) {
          return { x: window.innerWidth, rot: 0, scale: 1, config: { tension: 500 } };
        }
        return { x: 0, rot: 0, scale: 1, config: { tension: 500 } };
      });
      if (nextGone.length === eventsData.length) {
        setTimeout(() => {
          resetCards();
        }, 500);
      }
    }
  };

  const handlePrev = () => {
    if (rightGone.length > 0) {
      const index = rightGone.pop();
      setRightGone([...rightGone]);
      setSprings((i) => {
        if (i === index) {
          return { x: 0, rot: 0, scale: 1, config: { tension: 500 } };
        }
        return { x: 0, rot: 0, scale: 1, config: { tension: 500 } };
      });
    } else {
      const nextGone = [...leftGone, leftGone.length];
      setLeftGone(nextGone);
      setSprings((i) => {
        if (nextGone.includes(i)) {
          return { x: -window.innerWidth, rot: 0, scale: 1, config: { tension: 500 } };
        }
        return { x: 0, rot: 0, scale: 1, config: { tension: 500 } };
      });
      if (nextGone.length === eventsData.length) {
        setTimeout(() => {
          resetCards();
        }, 500);
      }
    }
  };

  return (
    <Wrapper>
      {springs.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          className="swipe__card"
          style={{
            zIndex: eventsData.length - i,
            transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
          }}
        >
          <animated.div style={{ transform: to([rot, scale], trans) }}>
            <StyledCard elevation={6}>
              {/* Image Section */}
              <CardMedia
                component="img"
                src={eventsData[i].image}
                alt={eventsData[i].name}
                title={eventsData[i].name}
                style={{ height: '75%', width: '100%', objectFit: 'cover' }} // 75% of the card for the image
              />
              
              {/* Event Details Section */}
              <div className="p-4 flex flex-col justify-center items-center" style={{ height: '25%' }}> {/* 25% reserved for text */}
                <span className="text-xl font-bold">{eventsData[i].name}</span>
                <span className="text-md text-gray-500 mt-2">{eventsData[i].date}</span>
              </div>
            </StyledCard>
          </animated.div>
        </animated.div>
      ))}

      <ArrowWrapper>
        <IconButton onClick={handlePrev}>
          <ArrowBackIos />
        </IconButton>
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </ArrowWrapper>
    </Wrapper>
  );
};

export default SwipeCards;

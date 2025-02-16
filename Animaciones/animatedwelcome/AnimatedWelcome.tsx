import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useTransition, animated, AnimatedProps } from "@react-spring/web";
import styles from "../../styles/AnimatedWelcome.module.css";

const messages = [
  "¡Bienvenido a LT Estética Vehicular!",
  "¡Gracias por elegirnos!",
];

type AnimatedDivProps = AnimatedProps<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

const AnimatedDiv: React.FC<AnimatedDivProps> = animated.div;

export default function AnimatedWelcome() {
  const [index, setIndex] = React.useState(0);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 1000 },
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(1);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {transitions((style, i) => (
        <AnimatedDiv style={style} className={styles.message}>
          {messages[i]}
        </AnimatedDiv>
      ))}
    </div>
  );
}

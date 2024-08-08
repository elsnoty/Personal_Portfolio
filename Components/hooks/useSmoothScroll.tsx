import { useLenis } from '@studio-freight/react-lenis';

const useSmoothScroll = () => {
  const lenis = useLenis();

  const scrollTo = (id: string) => {
    const element = document.querySelector(id) as HTMLElement | null;
    if (element) {
      lenis?.scrollTo(element);
    }
  };

  return { scrollTo };
};

export default useSmoothScroll;

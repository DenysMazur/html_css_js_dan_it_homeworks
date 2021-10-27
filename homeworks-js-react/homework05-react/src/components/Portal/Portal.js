import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({children}) => {

  const el = document.createElement('div');

  useEffect(() => {
    document.body.append(el);
    return () => {
      document.body.removeChild(el)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(children, el);
}

export default Portal;
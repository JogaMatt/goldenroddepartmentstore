import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_live_51LGjimDtjprElFEv3MHz8mNiG3c6MsxJjekFs8WrdNCffNqIgMfOE8YIOQHPOG5YmRB6IkQHI4sV7GMd1ulPaLUw00H0RVIFqB');
  }

  return stripePromise;
}

export default getStripe;
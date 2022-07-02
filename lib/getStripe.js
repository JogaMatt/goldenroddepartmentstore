import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

let publishKey = 'pk_live_51LGjimDtjprElFEv3MHz8mNiG3c6MsxJjekFs8WrdNCffNqIgMfOE8YIOQHPOG5YmRB6IkQHI4sV7GMd1ulPaLUw00H0RVIFqB'

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe(publishKey);
  }

  return stripePromise;
}

export default getStripe;
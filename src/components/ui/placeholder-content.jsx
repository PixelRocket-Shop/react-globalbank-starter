/**
 * PlaceholderContent component
 * Displays a message prompting users to download the full template
 * Used on non-homepage routes in the starter template
 */
const PlaceholderContent = () => {
  return (
    <div className="container mx-auto px-4 my-20">
      <p className="py-4 text-center bg-green-500 text-green-900 rounded-lg">
        Thank you for your interest in this template! You've downloaded the
        starter template which only includes the homepage. You can download the
        full version of this template for free by creating an account on my
        website and joining my newsletter.{' '}
        <a
          className="underline hover:no-underline"
          href="https://pixelrocket.store/free-templates/react-templates/global-bank-react-website-template"
        >
          Click here to visit view this template on my website.
        </a>
      </p>
    </div>
  );
};

export default PlaceholderContent;

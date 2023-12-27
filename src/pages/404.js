import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-white font-primaryFont text-indigo-600">404</p>
        <h1 class="mt-4 text-3xl font-bold font-primaryFont tracking-tight text-textPrimary sm:text-5xl">
          Page not found
        </h1>
        <p class="mt-6 text-textPrimary font-primaryFont leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            class="rounded-md px-3.5 py-2.5 text-sm font-semibold bg-textSecondary text-bgColor shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <a
            href="#"
            class="text-sm font-semibold bg-bgColor text-textSecondary"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>

    // <main style={pageStyles}>
    //   <h1 style={headingStyles}>Page not found</h1>
    //   <p style={paragraphStyles}>
    //     Sorry 😔, we couldn’t find what you were looking for.
    //     <br />
    //     {process.env.NODE_ENV === "development" ? (
    //       <>
    //         <br />
    //         Try creating a page in <code style={codeStyles}>src/pages/</code>.
    //         <br />
    //       </>
    //     ) : null}
    //     <br />
    //     <Link to="/">Go home</Link>.
    //   </p>
    // </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

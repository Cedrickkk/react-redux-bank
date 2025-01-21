export default function Header() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The React-Redux Bank
      </h1>
      <p className="text-sm text-muted-foreground">
        A simple application for learning redux based on
        <span className="me-1 ms-1 underline">
          <a
            href="https://www.udemy.com/course/the-ultimate-react-course/"
            target="_blank"
            className=""
          >
            Jonas Schmedtmann
          </a>
        </span>
        React course.
      </p>
    </div>
  );
}

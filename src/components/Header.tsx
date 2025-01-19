export default function Header() {
  return (
    <div className="text-center space-y-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The React-Redux Bank
      </h1>
      <p className="text-sm text-muted-foreground">
        A simple application for learning redux based on
        <span className="underline ms-1 me-1">
          <a
            href="https://www.udemy.com/course/the-ultimate-react-course/"
            target="_blank"
            className=""
          >
            Jonas Schmedtmann
          </a>
        </span>
        react course.
      </p>
    </div>
  );
}

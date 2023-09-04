/*
  Home page of the application (just for the sake of redirecting user to the relations page)
*/

export const PageHome = () => {
  return (
    <div className="page-home container">
      <a href="/relations">
        <h1>&gt; Jump to Relations Page!</h1>
      </a>
    </div>
  )
}

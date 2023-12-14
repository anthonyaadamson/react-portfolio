export default function About() {
  return (
    <div>
      <h1 className="my-5 p-3">About Me!</h1>
        <div className="clearfix">
        <img src="avatar.jpg" className="img-fluid rounded col-md-6 float-md-end mb-3 ms-md-3" alt="Picture of the developer, Anthony Adamson." />
        <p className="my-3 pt-5 px-5 col-6">
        Hello, welcome to my portfolio website. It was made using React and Vite. The styling was done using Bootstrap CSS.
        I have been honing my web developement skills for a while and enrolled into the UConn Coding Bootcamp to further my knowledge and it has opened my eyes to the posssibilies made possible with JavaScript, HTML and CSS.
        </p>
        <p className="my-3 px-5 py-3 col-6">
        I have been in various positions throughout different fields such as the automotive, landscaping and farming industries but computer science and web development has always been very interesting to me and now with the help of the UConn Coding Bootcamp, my hope is to have an oppurtunity to switch gears and change my profession for good.
        </p>
        <p className="my-3 px-5 py-3 col-6">
          I am very fortunate to have this oppurtunity and would love to further my knowledge with you and your team... Check out my Portfolio tab to see more!
        </p>
     </div>
    </div>
  );
}

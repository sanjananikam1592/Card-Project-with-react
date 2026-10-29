import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAACUCAMAAADWBFkUAAAAZlBMVEX///+VtNg5fcDP3e2euts8f8DW4O/w9Pn5+/2lv98web5BgsJvm81nlsrs8fnZ4/EbcbtbkMgkdb0AZLWsw+CHqtSAptIAaLfl7Pbe5/LC0+i7zuUAX7NPiMVUjMa1yuQAU7AAWLHvED6kAAAEG0lEQVR4nO2Y65aiOhCFwzWIgEIDCrY65/1f8hByITe6XcJZc2Z6f3+E2pUQQ1FJihAAAAAAAAAAAAAAAAAAAAAAAAAAAPB3knn53aNao+s9FCMhad+tcKu09o7XwX6ATbBhtHXuoWkJGc8+hREm5Um1d7weV6P/qLEd7v/bN7c3p8jH9K6pV1hIeXtXGPS5o+law7eow8QlZ5GQewSNkMdf49jzQev+5vQSPjZEwiHwEU2T7hU0unmSOtce6aN128U/Jm7b2AOb2yHwKYbXc2rv8QqWrBB55MOGua1DDzxufYrBeWrfeFr3qve7p5Mtcet+s4zr9zmBkflywoTqfVxPJj+GODzOJI/BFGghlHBZMGthOrKA4RTJUSPs+cumpWnesubqtKWgN9dNQjupqJGRXprqUZqUF6fg/zkqTLO9hXiXjEpsRQmZa1ps1MLu1e5iG7SSrCrL/6hc56W9rthGZyrepPv8mPlsTqZAH1LplC2UpkSZpJfg8oulhds/hvHjsyf7EB0ErTW52VMqS1qSpnjJRbeDScy8x9iyjuQnMqq5tWIrs2dt4am5Ph01Wt7X7nMbnAWJHbf15eyn0Z9dqvYJ/70U2f1ims6XjuxDlZ4EVpbJBqXopGlq/C3lNYirdMikqzSdUiuXv8/qafe1M7GmuL67n6TVWlY4a1ldugTW+rysZQUNrAYdlWtfvdda1j5qTmHvE3qp6HTOaJUXHe+G6+OpunjEO432lXf8YiTYLb7q/E0q9f04X5nvI5vR3QatfaU7pZXWxV5fWXBuZjwZTCguN82tlF55RW660+VGrg/Z+V4ZLFKHJmflXT2WHfTVQVkzQo2jXkWoFIOfufJGreDprLxC0Hc1rkl6te0U9/Sg7lp2wFNiRPah+7zMfHh2jFzRdoyJdD4rk/T6uLBImraMgma6vR7F7W47RnoVVHaWUYq2G5emwTVdzbvKuN1rN/5aJnVM2YqXvKHfdP4mz0LgnCIDIWinyE46l+ojl15FwQaYqdu5C+Xfkn2IRcklv9txW4hqS6Od0GUBpllO6MKUh/N0HhqtTVVKca8T+p8C26q6sGqzVzBglSXbxmNzmK/5V5gNpsfpq+F8w9vV5iQJG2JXm8Mj/7DiXPRCWCQYj/hN1eYgYDsF28ZHe52v+dzSFtVmvV48z+2XpebJaQ5A20tM3NQ6EAsttTZGW/JY7Ssqv1JtzvlJwKw2iww2DbEJz2I7pzKYcPlPqs3Vd6Vm3t5TgJb9iqvMfsT7g/3DKI8eQhYJoU+ZuWsn48aS5M5lqOW+vjJrzsd6QyT0hYdyyk1R6VOmnURw0/dStpfUslEOqurNM3u/YbR2nVjVhe1S8UrJ2F9n1sm8tV0AAAAAAAAAAAAAAAAAAAAAAAAAAPD38S+wanp0sV9oCgAAAABJRU5ErkJggg==",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App
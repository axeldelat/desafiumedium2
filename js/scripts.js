// SCRIPT PARA POSTEO MASIVO
let arrayPostsMasivos = [
    {
        category: "Onezero",
        content: "Marketing used to be all about spending money. If you could outspend your competitors, there was a good chance you could take over a larger portion of the market share. Creativity played a part, but being successful often came down to dollars spent. Today, however, marketing is more complicated. People don’t want to be marketed to; they want to build relationships. There are millions of people starting a blog these days, dozens of social media platforms, and enough acronyms to make your head spin — SEO, PPC, CRO, CTA. ",
        featured: true ,
        popular: false ,
        imageUrl: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2019/09/25003451/campaign-creators-yktK2qaiVHI-unsplash-1-1024x683.jpg",
        title: "The 5 Best Digital Marketing Strategies for Beginners",
        editorsPick: true 
    },
   
    {
        category: "Forge",
        content: "I thought I simply didn't understand React. I taught myself React and I still wish I could go back in time and make it like React never existed. Here's why. 1. It's slow, 53% of mobile users abandon websites that take longer than 3 seconds to load. For every additional second a page takes to load, 10 percent of users leave.",
        featured: false ,
        popular: true ,
        imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--1ppmvwxR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/cv7ln3mwwp4mbzhi8yog.png" ,
        title: "Stop Using React", 
        editorsPick: false 
    },
    { category: "Momentum" ,
        content: "Now that we have accepted how COVID-19 has forever changed the world of work, it’s time to accept how we need to change along with it. Our current uncertainty demands that we rethink everything from the way we network and job hunt, to how we meaningfully connect, grow professionally, and build cohesive corporate cultures without water cooler moments and “get-to-know-you” lunches. Similarly, with entire industries cratering, job security a distant memory, and life in the “new normal” anything but, mastering the new rules of work requires the ability to not only survive change, but thrive in it. That is why the most important skill needed to ride this wave of change rather than get crushed by it is this: building a muscle for the unexpected so that uncertainty becomes a welcome source of opportunity—and a mechanism for sustained success.",
        featured: false,
        popular: false ,
        imageUrl: "https://miro.medium.com/max/500/1*NaOy_fwMIsuIqpeJZ49d6A.png",
        title: "Why building a muscle for uncertainty is the most important thing you can do", 
        editorsPick: true   
    },
     
    {
        category: "Forge",
        content: "HTML5 is not a new thing. We have been using several features of it since the initial release(January 2008). As part of #100DaysOfCode initiative, I have taken a close look to the HTML5 feature list again. See what I found? I haven't really used a bunch of it so far! In this article, I am listing down ten such HTML5 features that I haven't used much in the past but, found them useful now. I have also created a working example flow and hosted on Netlify. Hope you find it useful too. " ,
        featured: false ,
        popular: false ,
        imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--M9Gl4H0K--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/4l6fsv0bm6vw0omltd2h.png" ,
        title: "10 useful HTML5 features, you may not be using", 
        editorsPick: true  
    },
    {
        category: "Coronavirus",
        content: "Some 170 Covid-19 vaccines are in development around the world, according to the World Health Organization, each one promising to protect people from the deadly coronavirus and allow them to go back to work and school. Now, a handful are starting or nearing the final stage of testing. Depending on the results, some companies say their vaccines could be greenlighted for use as soon as this year. The Front-Runners: Among the first vaccine candidates to start the final round of testing is one developed by the University of Oxford and AstraZeneca AZN 0.98% PLC. Also far along are experimental shots from Pfizer Inc. PFE -0.22% and its partner BioNTech SE, BNTX -0.44% as well as Moderna Inc. MRNA -2.91%",
        featured: true ,
        popular: false ,
        imageUrl: "https://si.wsj.net/public/resources/images/B3-HG045_Oxford_700PX_20200829153539.jpg",
        title: "Covid-19 Vaccines: What’s Coming and When?", 
        editorsPick: true  
    },
    {
        category:"Onezero",
        content: "Are you hoping to to take your blog to the next level? Are you struggling with a particular aspect of your marketing plan? Even if you are faced with a seemingly insurmountable challenge, there is always somebody out there who can help. These are bloggers who specialize in different digital marketing niches" ,
        featured: false,
        popular: false ,
        imageUrl: "https://neilpatel.com/wp-content/uploads/2020/04/about-neil-patel.png" ,
        title: "33 Things to Learn from 33 Top Marketing Blogs", 
        editorsPick: true 
    },
    {
        category:"Momentum" ,
        content: "As a founder and co-chief executive of Netflix Inc., NFLX -3.69% Reed Hastings has reshaped both the way people watch television and how the entertainment industry operates. Launching Netflix in 1997 as a DVD-by-mail movie-rental service with Marc Randolph, Mr. Hastings grasped early that the internet was the future of distribution. First with old movies and TV shows that Hollywood studios and networks were more than happy to sell, then with original programming such as “House of Cards” and “Stranger Things,” the streaming giant has built a global subscriber base approaching 200 million households world-wide. Along the way, Mr. Hastings has built a distinctive—and, to some, cutthroat—corporate culture. The Netflix way encourages staff to take big risks, typically without the need of approval from a chain of bosses, and to communicate with blunt candor. Leaders often practice what is called the “keeper test,” in which they ask themselves: If a staffer were offered a job elsewhere, would you fight to keep that employee? If the answer is no, the person is let go. In his new book “No Rules Rules: Netflix and the Culture of Reinvention,” Mr. Hastings likens being employed at the streaming giant to being part of a sports team: Getting cut is disappointing but carries no shame. “Unlike many companies, we practice: Adequate performance gets a generous severance package,” reads one of Netflix’s mottos." ,
        featured: true,
        popular: false ,
        imageUrl: "https://images.wsj.net/im-228943?width=1260&size=1.5" ,
        title: "Netflix’s Reed Hastings Deems Remote Work ‘a Pure Negative", 
        editorsPick: false  
    },
    {
        category: "Well Being" ,
        content: "Exercise researchers and physicians have some blunt advice for those of us aiming to return to regular exercise now, after months spent sheltering at home during the coronavirus pandemic. Start slowly, they suggest, and then rev up your workouts, also slowly.Many of us, admittedly, have been sedentary during the pandemic. According to data from the company Fitbit, which makes activity trackers, American adults tended to be about 12 percent less active after the stay-at-home mandates began in March than they were in January. This inactivity leaves most of us less fit than during those halcyon days of last year, with predictable consequences when we surge back to our favorite sidewalks, paths and gyms.",
        featured: false ,
        popular: false ,
        imageUrl: "https://static01.nyt.com/images/2020/05/28/well/askwell-exercise/merlin_172695435_f28b719e-5dd4-4f38-9317-3bec63149f09-jumbo.jpg",
        title: "Starting to Exercise Again After Lockdown", 
        editorsPick: true 
    },
    {
        category: "Forge",
        content: "Here you'll find the best websites and resources with modern UI components in different formats such as PSD, Sketch, Figma, Icons, and Illustrations, etc. They are great for ideas for web components/UI. Product design is a very essential part of every developer's job. It's not just about a good look, it's about engaging visuals and overall presentation. For that, these various resources will be helpful. Rather than investing time and money in a long designing process, it is better to use such resources which provide ready to use components and features for a great, impressive, and awesome product. This way one can save lots of time and money as well. It can be stressful to search for various resources here and there. That's why we decided to create this collection which will provide all the best resources websites in one place. Now let's check out the collection below.",
        featured: false ,
        popular: true,
        imageUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--Rz07BxuC--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/8k8uwcsqrz8tvjmr9riw.png",
        title: "Best design 🎨 resources websites every developer 💻 should bookmark🔖", 
        editorsPick: false  
    },
    {
        category: "Well Being" ,
        content: "You probably have a vague sense that exercise is good for you—and you’ve probably heard that it’s “healthy for the heart.” But if you’re like most people, that’s not enough motivation to get you to break a sweat with any regularity. As I report in the TIME cover story, “The Exercise Cure,” only 20% of Americans get the recommended 150 minutes of strength and cardiovascular physical activity per week, more than half of all baby boomers report doing no exercise whatsoever, and 80.2 million Americans over age 6 are entirely inactive.",
        featured: true ,
        popular: false ,
        imageUrl: "https://miro.medium.com/max/2400/1*1Vb9u9nL_m5i5DEJUwptJw.gif",
        title: "The Best Strength Training Workout Is Surprisingly Easy", 
        editorsPick: false  
    },
    {
        category: "Onezero",
        content: "Human conversation is a sequence of verbal exchanges – what linguists call turn-taking. This rhythmic exchange is deeply hardwired into our social neurophysiology, as call-and-response bonding in animals is likely hundreds of millions years old. And as humans, we carry our hardwired back-and-forth expectations into our interactions with computers. There’s a lot of discussion around conversational computing these days – at Intercom, we talk about our conversational relationship platform, conversational support and conversational marketing. But what makes software conversational? The way it sounds, or something deeper? This piece outlines a process for building and structuring effective conversational experiences in software. Along the way, we’ll explore how conversational UX – cooperative exchanges of inputs and outputs – closes gaps between products and users.",
        featured: true,
        popular: false ,
        imageUrl: "https://blog.intercomassets.com/blog/wp-content/uploads/2020/08/conversational_thinking-1800x840.jpg.optimal.jpg" ,
        title: "Conversational design for better products" , 
        editorsPick: false
    },
    {
        category: "Gen",
        content: "An alarming “mass die-off” of wild birds in the southwestern U.S. has scientists worried—and perplexed. The cause is not at all clear, with some scientists theorizing that climate change factors are playing a part. Most of the birds are insect eaters, and they’ve been found emaciated and disoriented, suggesting a gap in the food supply. There’s also speculation that wildfires are affecting the lives of these birds. CNN reports on the dark phenomenon and firsthand accounts of the sick and dying birds. The observations sound like what you’d expect from animals with a contagious, behavior-changing disease like rabies. “On the [White Sands] missile range golf course [in New Mexico], swallows, which are aerial insectivores that don't even walk, were sitting on the ground and letting people approach them,” CNN explains." ,
        featured: false ,
        popular: true ,
        imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-dead-bird-royalty-free-image-1600356309.jpg" ,
        title: "Hundreds of Thousands of Birds Are Suddenly Dropping Dead. No One Knows Why", 
        editorsPick: false  
    },
    {
        category: "Forge" ,
        content: "Over the last ten years or so, Mexico has become a haven for digital nomads looking for affordable lifestyles, new cultures to explore, and friendly neighbors to practice their Spanish with. Mexico is a very large and diverse country. It’s got everything from big cities to mountains to chill beach towns. Exploring Mexico is easy with cheap domestic flights – plus both Cancun and Mexico City are huge international travel hubs. As a remote worker, it’s important to have a stable and productive work environment as well as an inspiring and robust social life. Mexico has plenty of destinations that satisfy both of these needs, as well as a great climate and delicious food. With COVID-19 affecting travel for the foreseeable future, it’s expected that the majority of nomads from the U.S., Canada, and other North, Latin, and South American countries will look to Mexico for their next move. That’s why we’ve gathered the top 10 most popular places in Mexico for digital nomads and broken them down into pros and cons. So read on to find the perfect spot to set up your remote workstation.",
        featured: true,
        popular: true,
        imageUrl: "https://e8u6c9g3.stackpathcdn.com/wp-content/uploads/2020/07/playa.jpg",
        title: "The Ultimate Digital Nomad Mexico Guide", 
        editorsPick: false 
    },
    {
        category: "Well Being",
        content: "Eight years ago, while working as an assistant Cuyahoga County prosecutor in Cleveland, Gayle Williams-Byers was in the throes of a serial killer case when she decided to take horseback-riding lessons. This summer, in the midst of the coronavirus pandemic, Ms. Williams-Byers, 46, now a South Euclid Municipal Court judge, started free online classes in American Sign Language offered by Gallaudet University in Washington. She also took a webinar in labor trafficking. In recent years, she has enrolled in a variety of classes and workshops, including one on how to get a commercial driver’s license — not something she plans to act on any time soon.",
        featured: true ,
        popular: false ,
        imageUrl: "https://static01.nyt.com/images/2020/09/02/multimedia/02sp-resilience-learning/02sp-resilience-learning-superJumbo.jpg" ,
        title: "To Build Emotional Strength, Expand Your Brain", 
        editorsPick: false  
    },
    {
        category: "Momentum",
        content: "Zoom has rocketed from one of the smallest listed pure-play cloud software companies to one of the largest—all in the space of a year.When the videoconferencing wunderkind closed its last fiscal year in January, it was generating a little over $600 million a year in revenue. Six months into the pandemic, that number has skyrocketed to $1.3 billion for the trailing 12-month period ended July 31. For the full fiscal year ending in January, Zoom on Monday officially raised its forecast by 33% to around $2.4 billion. That would propel Zoom from one of the smallest listed pure-play cloud software companies to one of the largest—all in the space of a year. And that assumes the most recent forecast is even in the ballpark. Zoom has substantially underestimated its own performance since the pandemic struck. Revenue for the second fiscal quarter reported Monday afternoon came in 33% above the high end of the company’s projected range, while the previous period’s revenue beat the high end of guidance by 63%.",
        featured: false ,
        popular: true,
        imageUrl: "https://images.wsj.net/im-227178?width=1260&size=1.5",
        title: "Zoom’s Unpredictable Path to Glory", 
        editorsPick: true  
    },
    {
        category: "Onezero",
        content: "The new job title of “Growth Hacker” is integrating itself into Silicon Valley’s culture, emphasizing that coding and technical chops are now an essential part of being a great marketer. Growth hackers are a hybrid of marketer and coder, one who looks at the traditional question of “How do I get customers for my product?” and answers with A/B tests, landing pages, viral factor, email deliverability, and Open Graph. On top of this, they layer the discipline of direct marketing, with its emphasis on quantitative measurement, scenario modeling via spreadsheets, and a lot of database queries. If a startup is pre-product/market fit, growth hackers can make sure virality is embedded at the core of a product. After product/market fit, they can help run up the score on what’s already working.This isn’t just a single role – the entire marketing team is being disrupted. Rather than a VP of Marketing with a bunch of non-technical marketers reporting to them, instead growth hackers are engineers leading teams of engineers. The process of integrating and optimizing your product to a big platform requires a blurring of lines between marketing, product, and engineering, so that they work together to make the product market itself. Projects like email deliverability, page-load times, and Facebook sign-in are no longer technical or design decisions – instead they are offensive weapons to win in the market.",
        featured: true ,
        popular: false,
        imageUrl: "https://1g1uem2nc4jy1gzhn943ro0gz50-wpengine.netdna-ssl.com/wp-content/uploads/2016/08/ahc_cropped.jpg",
        title: "Growth Hacker is the new VP Marketing", 
        editorsPick: false  
    },
    {
        category: "Gen",
        content: "There are hundreds of trillions of microbes within the human body, which have a profound impact on modulating host function. Many of these microbes reside in the gastrointestinal tract and have been shown to influence normal physiology across all body systems (1). Disruptions in the delicate balance of microbes within the gut and other niches are associated with numerous disease states—including neurologic disorders, cardiovascular disease, gastrointestinal disorders, and even cancer (2). Accordingly, there is intense interest in targeting these microbes to promote overall health and to abrogate disease, with considerable advances made recently. Strategies to modulate gut microbes include fecal microbiota transplant (FMT), which involves the transfer of fecal material from one individual to another for a desired physiologic effect. This approach, among other gut microbiota modulation strategies, has shown promise in treating several disease conditions, although opportunities exist to iterate and build on these approaches",
        featured: false ,
        popular: false ,
        imageUrl: "https://www.sciencemag.org/sites/default/files/styles/carousel_1280x427__3_1_/public/images/rt_scitm_Sept16_aay1318_R1.jpg?itok=VPdFLCMs" ,
        title: "Modulating gut microbes", 
        editorsPick: true  
    },
    {
        category: "Forge",
        content: "I’ve been teaching Java for quite a while now. So I often share advice on how to learn programming faster and better. In talking to my students I can see that one thing distracts them very much: coding anxiety. It is a real trouble. Some people find it hard to focus their attention for more than one hour. Some are excessively stressed out by the job search. So today I’m gonna share on how to eliminate this kind of stress, use the best ways to learn programming, and enjoy coding happily ever after." ,
        featured: false ,
        popular: true,
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/hackernoon-app.appspot.com/o/images%2FqeIv6rNygoYrUXBwG7uA2lPpLSj2-8e203v0o.jpeg?alt=media&token=14dfdc45-12d5-4f54-957e-f57c223cd99a",
        title: "Learn To Code With No Hassle", 
        editorsPick: false  
    },
    {
        category: "Coronavirus",
        content: "June 2021. The world has been in pandemic mode for a year and a half. The virus continues to spread at a slow burn; intermittent lockdowns are the new normal. An approved vaccine offers six months of protection, but international deal-making has slowed its distribution. An estimated 250 million people have been infected worldwide, and 1.75 million are dead. Scenarios such as this one imagine how the COVID-19 pandemic might play out1. Around the world, epidemiologists are constructing short- and long-term projections as a way to prepare for, and potentially mitigate, the spread and impact of SARS-CoV-2, the virus that causes COVID-19. Although their forecasts and timelines vary, modellers agree on two things: COVID-19 is here to stay, and the future depends on a lot of unknowns, including whether people develop lasting immunity to the virus, whether seasonality affects its spread, and — perhaps most importantly — the choices made by governments and individuals. “A lot of places are unlocking, and a lot of places aren’t. We don’t really yet know what’s going to happen,” says Rosalind Eggo, an infectious-disease modeller at the London School of Hygiene & Tropical Medicine (LSHTM).",
        featured: true ,
        popular: false ,
        imageUrl: "https://media.nature.com/w1024/magazine-assets/d41586-020-02278-5/d41586-020-02278-5_18242530.jpg" ,
        title:  "How the pandemic might play out in 2021 and beyond", 
        editorsPick: false  
    },
    {
        category: "Momentum",
        content: "It takes luck, creativity and a fresh look at your network of contacts to find a job in the worst labor market in more than a decade. Since the pandemic hit the U.S. hard in March, the economy has lost 13 million jobs, job seekers have seen offers yanked away, and many recent college graduates remain sidelined. But there is reason to be optimistic, albeit cautiously: Many employers are still hiring. More than half of small and midsize companies plan to hire full-time employees this year, according to an August survey of 600 human-resources and finance chiefs by Paycor, an HR software company. And while the percentage of LinkedIn members hired into new jobs fell 7.4% in July compared with the year before, it jumped 57.5% from June, according to LinkedIn’s August Workforce Report.",
        featured: false ,
        popular: true,
        imageUrl: "https://images.wsj.net/im-225326/8SR",
        title: "The New Rules for Landing a Job in the Covid Era", 
        editorsPick: false  
    },
    {
        category: "Well Being",
        content: "“Yoga is difficult for one whose mind is not subdued.” Bhagavad Gita To quiet the mind is to know our soul. Yet, how can we do this when we have approximately 40-70 thousand thoughts going through our mind daily, and we tend to listen more to our mental chatter than the subtle whispers of our inner being? Meditation and yoga are two of the best ways to clear the mind. As Yogi Bhajan says, “By cleansing your mind your soul will shine through.” In my book, Says Who? How One Simple Question Can Change The Way You Think Forever, I’ve also created a method for cleansing the mind by systematically questioning and challenging our thoughts, especially those that are negative and fear-based." ,
        featured: true ,
        popular: false ,
        imageUrl: "https://layoga.com/wp-content/uploads/2020/06/woman-girl-animal-dog-4056535.jpg" ,
        title: "7 Questions to Transform Your Mind with Yoga", 
        editorsPick: false  
    } 
]
 //posteo masivo de blogs
 

const enviarPostStringificado =() => {
    
    arrayPostsMasivos.forEach((post) => {
        let stringPost = JSON.stringify(post) 
        $.ajax({
            type: "POST",
            url: "https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json",
            data: stringPost,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {

            },
            failure: function (msg) {
                alert(msg.d);
            }
        })
    })
}

//enviarPostStringificado()


//SCRIPT PARA VALIDAR:
//validación de posts (chequeo)
const getPosts = () => {
    $.get("https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json", function(showData){
        console.log(showData);
        console.log("va la data en este console call")
      });
    
}
getPosts()

//SCRIPT PARA BORRAR POSTS
/*
$.ajax({ url: "https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json" , method: "DELETE" })
            .then(function (data) {
                console.log("borraar")
            })
            .catch(function (err) {
                console.log("error al borrar")
            });

*/
            const getPosts = () => {
                $.get("https://ajaxclass9g.firebaseio.com/hamaalax/medium/posts/.json", function(showData){
                    console.log(showData);
                    console.log("va la data en este console call")
                  });
                
            }
            getPosts()
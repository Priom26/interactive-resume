var bio = {
	"name" : "Muhammad Haider",
	"role" : "Senior Training Manager",
	"contacts" : {
		"mobile" : "469-417-8786",
		"email" : "haider06@yahoo.com",
		"github" : "Priom26",
		"location" : "Texas",
		"twitter" : "N/A",
		"blog" : "N/A"
	},
	"welcomeMessage" : "Life is about learning new things.",
	"biopic":"images/Profile.jpg",
	"skills" : ["Customer Service", "IP Networking","Instructions"]
};

bio.display = function() {
	var nameHTML = HTMLheaderName.replace("%data%", bio.name);
	var roleHTML =  HTMLheaderRole.replace("%data%", bio.role);	
	$("#header").prepend(roleHTML);
	$("#header").prepend(nameHTML); 
	
	var contacts = HTMLcontactGeneric.replace("%contact%", bio.contacts);
	var mobileNumber = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(mobileNumber); 
	$("#footerContacts").append(mobileNumber); 
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(email)
	$("#footerContacts").append(email); 
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(twitter); 
	$("#footerContacts").append(twitter); 
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(github); 
	$("#footerContacts").append(github); 
	var blog = HTMLblog.replace("%data%", bio.contacts.blog);
	$("#topContacts").append(blog);
	$("#footerContacts").append(blog);
	var loc = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(loc);  
	$("#footerContacts").append(loc);  

	var bioPic = HTMLbioPic.replace("%data%", bio.biopic); 
	$("#header").append(bioPic);
	var welcomeMess = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(welcomeMess);	
	
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
}

var work = {
	"jobs" : [
		{
		"employer" : "AT&T",
		"title" : "Instructor",
		"location" : "Dallas, TX",
		"dates" : "1/2007-Present",
		"description" : "Train internal employees",
		"url" : "http://www.att.com/"
		},
		{
		"employer" : "AT&T",
		"title" : "Technical Support/Instructor",
		"location" : "Dallas, TX",
		"dates" : "1/2003-2006",
		"description" : "Support/train internal employees",
		"url" : "http://www.att.com/"
		}
	]
};

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);	
		var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
		var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var employertitle = employer + title;
		$(".work-entry:last").append(employertitle);
		var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(dates);	
		var loc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(loc);	
		var description = HTMLprojectDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(description);	
	}
}

var projects = {
	"projects" : [
		{
		"title" : "Training PowerPoints",
		"dates" : "11/2006-Present",
		"description" : "Continue to create PowerPoints to facilitate learning.",
		"images" : ["images/Powerpoint.jpg"]
		},
		{
		"title" : "Team Videos",
		"dates" : "9/2014-Present",
		"description" : "Continue to create videos for team to inspire and drive collaboration.",
		"images" : ["images/Video.jpg"]
		}
	]
};

projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(title);
		var dates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(dates);
		var description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(description);	
	
		for(image in  projects.projects[project].images) {
			var image = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(image);	
		}
	}
}

var education = {
	"schools" : [
		{
		"name" : "University of Texas at Dallas",
		"location" : "Richardson, TX",
		"degree" : "MS (incomplete)",
		"major" : "MIS",
		"dates" : "2003",
		"url" : "http://www.utdallas.edu/"
		},
		{
		"name" : "Bangladesh Agricultural University",
		"location" : "Mymensingh, Bangladesh",
		"degree" : "BS",
		"major" : "Agriculture",
		"dates" : "1979-1984",
		"url" : "http://www.bau.edu.bd/"
		}
	],
	"onlineCourses": [
		{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"date" : "not yet finished",
		"url" : "https://www.udacity.com/course/nd001"
		}
	]
};

education.display = function() {
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var name = HTMLschoolName.replace("%data%", education.schools[school].name);
		var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append((name + degree).replace("#",education.schools[school].url));
		var dateSchool = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(dateSchool);
		var loc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(loc);
		var majors = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(majors);
	}
	
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses){
		var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(title + school);
		var date = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		$(".education-entry:last").append(date);
		var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#",education.onlineCourses[course].url);
		$(".education-entry:last").append(url);
	}
}

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() 
	+ name[0].slice(1).toLowerCase();	
	return name[0] + " " + name[1];
}

function buttonAndMap() {
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton); 
}

bio.display(); 
work.display();
projects.display();
education.display();
buttonAndMap();
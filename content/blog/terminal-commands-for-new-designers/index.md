---
title: The Top 10 Terminal Commands Every New Designer Should Know
date: "2015-06-18T22:12:03.284Z"
posttype: blog
---

You’ve probably experienced a time you’ve had a developer just sigh and take your computer from you instead of watching you entering in code to a scary looking terminal window. Wouldn’t you rather know a little bit of what they’re up to? Wouldn’t you rather figure out the basic commands of knowing how to use git (which you’ll inevitably have to use at some point)?

These are the very basics, but they’ll certainly help with getting you familiar with using terminal and not feeling as scared about deleting everything on your computer.

First off, you can start using the command line by opening up the Terminal app. The easiest way to do this is to search Spotlight (shortcut: cmd + space) for Terminal.

##Some basic file management/navigating around files stuff
###1. cd

Stands for change directory (or folder). You can use this command to navigate into a folder.

`cd work/my-project`

Similarly, you can navigate up, or out of a folder by adding ../ to the beginning:

`cd ../`

###2. ls

Stands for list. Lists out the contents of a folder or directory. If I want to see the contents of my Dev folder, I'd type:

`ls Dev`

...and then press enter. If your folder were named Development instead, you'd use the next command to save you a little time.

###3. Tab

Completes arguments. If you’re drilling down into a directory, use tab to finish the folder name so you don’t have to memorize it (or worry about spelling it wrong).

###4. Up and Down Arrow Keys

This will let you navigate through previous commands you’ve already entered. I’ve found it’s especially helpful when using git add and push or when you need to remember that command that dev told you to use and you haven’t cleared your window.

###5. mkdir

Stands for make directory. Enter in:

`mkdir new-project`

To create a new folder within the directory you’re in.

###6. rm

Removes. You can use this to, say, remove the directory you just created. (Hint: use tab to complete the directory name.) This command also removes files, but be careful because they do not go to the trash can. Instead, they’re deleted immediately.

`rm new-project/`

###7. mv

Created a stylesheet, but it’s in the wrong folder? Use the mv command to move the file to the correct folder.

`mv style.css /stylesheets`

###8. clear

Clears the current window. Have your terminal window cluttered up with stuff and just want to not be distracted? Enter the clear command to start fresh.

##Things to help you with development

###9. What to do when you a git command and it opens this weird view you can’t get out of

If you’ve ever tried to do a git commit and forgot to add a message, it’ll switch views to something that you might have trouble getting out of. This is git opening up vim for you to edit something. All you need to do to exit is:

`:wq`

This means write (or save) and quite. (Yes you need the colon.) Press enter and it should go back to the view that’s more familiar. If that doesn’t work, try adding an exclamation point to the end.

Extra points if you actually type a commit message before quitting!

###10. Start a webserver for a directory

This’ll let you view websites you’re building or testing locally. First, cd into the directory or folder you want and then enter this command:

`python -m SimpleHTTPServer`

If you’re having trouble with the port number already being in use, add a different number onto the end of the statement. Ex:

`python -m SimpleHTTPServer 8080`

## More points

Intimidated when people say you should learn something like Vim, but don’t know where to start? You can enter vimtutor as a command and start learning immediately.

`vimtutor`

That’s right. Terminal comes with a built in way to learn how to use it’s code editor, so no excuses.

Interested in learning more about how to use the command line? Check out [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line).

# A vocabulary anagram game for English learners

Eliot Martin | eliotm@uoregon.edu


This is a simple anagram game designed using flask to handle the backend logic and AJAX to 
update the front end without page redirects. Main logic can be found in flask_vocab.py and 
front end designed in vocab.html. Created in CIS 322 at the University of Oregon.

USAGE: Copy credentials_skel.ini into the vocab directory and specify the preferred word 
list for use. Call this file "credentials.ini. Build and run in docker (it also would run 
fine in just a regular flask environment).

# NER-for-Mental-Health-Dialogs
NLP pipeline for Named Entity Recognition on Mental Health Dialogs from Discord

Tasks : 

1) Retrieve dialogs related to mental health from the Discord servers. 

2) Tag the data with custom entities. 

3) Develop a model to perform named entity recognition to retrieve all entities including those that refer or allude to mental health.



Task 1 :  

The “Crumb of Serotonin” is a Discord server dedicated to mental health problems people face. We used this server to retrieve dialogs pertaining to mental health.  

The data was retrieved using a nodejs script that made the task of retrieval semi-automatic. Keywords related to mental health such as “anxiety” and “depression” 
need to be plugged into the code which then crawls through all the dialogs that have these keywords and extracts the dialogs for us.  

 

Task 2 :  

Doccano was used for the purpose of tagging the data. 
The tags included : B-PER, I-PER, B-EVENT, I-EVENT, B-LOC, I-LOC, O 



 

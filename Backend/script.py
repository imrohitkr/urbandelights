import sys
import pickle
import os

os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

import keras
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

try:
    # Read input text from standard input
    input_text = sys.stdin.readline()
   

    def classify_review(review_text):
     # Initialize VADER sentiment analyzer
        sia = SentimentIntensityAnalyzer()
    
        # Analyze sentiment of the review text
        sentiment_scores = sia.polarity_scores(review_text)
    
        # Determine sentiment based on compound score
        compound_score = sentiment_scores['compound']
        if compound_score >= 0.05:
            return "Positive"
        elif compound_score <= -0.05:
            return "Negative"
        else:
            return "Neutral"

    def main():
        review_text = input_text
        sentiment = classify_review(review_text)
        print("(",sentiment,")")

    if __name__ == "__main__":
        # Download VADER lexicon if not already downloaded
        # nltk.download('vader_lexicon')
        main()



    if len(input_text) >=250:
    # Load summarizer model from pickle file
        with open(r'C:\Users\pushp\Desktop\Project\Backend\summarizer.pkl', 'rb') as f:
            loaded_summarizer = pickle.load(f)

    # Generate summary using loaded summarizer

        result = loaded_summarizer(input_text)
        print(result[0]['summary_text'])
    else:
        print(input_text)

except Exception as e:
    print("Error:", e)

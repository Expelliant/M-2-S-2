import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from collections import Counter
import re
from wordcloud import WordCloud
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import networkx as nx

# Load dataset
df = pd.read_csv('BackEnd/ecommerce_dataset.csv')

# Convert "Churning" column to Boolean
df['is_churning'] = df['Churning'].map({'Yes': True, 'No': False})

def add_labels(ax):
    """Function to add value labels on bars."""
    for p in ax.patches:
        ax.annotate(f'{int(p.get_width())}', (p.get_width(), p.get_y() + p.get_height() / 2),
                    ha='left', va='center', fontsize=10, color='black', xytext=(5, 0),
                    textcoords='offset points')

# 1️⃣ **Top 5 Most Bought Products**
plt.figure("Top 5 Most Bought Products", figsize=(8, 4))
top_bought = df["Most Bought"].value_counts().nlargest(5)
ax = sns.barplot(y=top_bought.index, x=top_bought.values, palette="viridis")
add_labels(ax)
plt.title("Top 5 Most Bought Products")
plt.xlabel("Count")
plt.ylabel("Product")
plt.show()  # ✅ Ensure this is included

# 2️⃣ **Top 5 Most Searched Products**
plt.figure("Top 5 Most Searched Products", figsize=(8, 4))
top_searched = df["Most Searched"].value_counts().nlargest(5)
ax = sns.barplot(y=top_searched.index, x=top_searched.values, palette="coolwarm")
add_labels(ax)
plt.title("Top 5 Most Searched Products")
plt.xlabel("Count")
plt.ylabel("Product")
plt.show()  # ✅ Ensure this is included

# 3️⃣ **Top 5 Customers with Most Purchases**
plt.figure("Top 5 Customers by Purchase Count", figsize=(8, 4))
top_customers = df["Name"].value_counts().nlargest(5)
ax = sns.barplot(y=top_customers.index, x=top_customers.values, palette="magma")
add_labels(ax)
plt.title("Top 5 Customers with Most Purchases")
plt.xlabel("Number of Purchases")
plt.ylabel("Customer Name")
plt.show()  # ✅ Ensure this is included

# 4️⃣ **Churning Rate by Most Bought Product**
plt.figure("Churning Rate by Most Bought Products", figsize=(8, 5))
churn_data = df.groupby(["Most Bought", "is_churning"]).size().unstack()
ax = churn_data.plot(kind="bar", stacked=True, colormap="coolwarm", figsize=(8, 5))
for container in ax.containers:
    ax.bar_label(container, fmt='%d', label_type='center', fontsize=10, color='white')
plt.title("Churning Rate by Most Bought Products")
plt.xlabel("Product")
plt.ylabel("Customer Count")
plt.legend(["Not Churning", "Churning"])
plt.xticks(rotation=45)
plt.show()  # ✅ Ensure this is included

# 5️⃣ **Text Insights**
most_searched = df["Most Searched"].value_counts().idxmax()
most_bought = df["Most Bought"].value_counts().idxmax()
churn_rate = df["is_churning"].mean() * 100  # Convert to percentage

plt.figure("Analysis Summary", figsize=(6, 3))
plt.text(0.1, 0.8, f"📊 Analysis Summary:", fontsize=14, fontweight="bold")
plt.text(0.1, 0.6, f"✅ Most searched product: {most_searched}", fontsize=12)
plt.text(0.1, 0.5, f"✅ Most bought product: {most_bought}", fontsize=12)
plt.text(0.1, 0.4, f"✅ Customer churn rate: {churn_rate:.2f}%", fontsize=12)
plt.axis("off")
plt.show()  # ✅ Ensure this is included

# 6️⃣ **Review Analysis - Word Cloud**
reviews = " ".join(df["Review of Product in Words"].dropna())
wordcloud = WordCloud(width=800, height=400, background_color="white").generate(reviews)

plt.figure("Review Word Cloud", figsize=(10, 5))
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.title("Most Common Words in Customer Reviews", fontsize=14)
plt.show()  # ✅ Ensure this is included

# 7️⃣ **Product Recommendation Network**
plt.figure("Product Recommendation Network", figsize=(10, 8))
G = nx.Graph()

# Add nodes
for product in df["Most Bought"].unique():
    G.add_node(product)

# Add edges (random connections for visualization)
products = df["Most Bought"].unique()
for i in range(len(products) - 1):
    G.add_edge(products[i], products[i+1])

# Visualize the graph
pos = nx.spring_layout(G, seed=42)
nx.draw(G, pos, with_labels=True, node_size=800, node_color="lightblue", edge_color="gray", font_size=10)
plt.title("Product Recommendation Network", fontweight="bold")
plt.show()  # ✅ Ensure this is included


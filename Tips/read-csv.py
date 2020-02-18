import csv

arr = []
with open('csv/sample.csv', 'r') as f:
    reader = csv.reader(f)
    for line in reader:
        arr.append(line)
print(arr)

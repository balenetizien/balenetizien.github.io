---
title: "Belajar Python Dasar untuk Pemula: Panduan Lengkap Mulai dari Nol"
excerpt: "Panduan lengkap belajar Python dari nol — sintaks dasar, variabel, tipe data, dan program pertama kamu. Cocok untuk pemula yang belum pernah coding sama sekali."
categories:
  - Python
tags:
  - Python
  - Python Dasar
  - Tutorial Python
  - Pemula
---

## Apa Itu Python?

**Python** adalah salah satu bahasa pemrograman paling populer di dunia saat ini. Python disukai karena sintaksnya yang *bersih dan mudah dibaca* — hampir mirip dengan bahasa Inggris sehari-hari.

Python digunakan untuk banyak hal:
- **Web Development** (Django, Flask)
- **Data Science & Machine Learning** (Pandas, NumPy, TensorFlow)
- **Otomasi & Scripting**
- **Cybersecurity**

Singkatnya, belajar Python adalah investasi yang sangat worth it!

## Instalasi Python

Sebelum mulai coding, kamu perlu install Python di komputermu.

1. Buka [python.org/downloads](https://www.python.org/downloads/)
2. Download versi terbaru (Python 3.x)
3. Jalankan installer — **centang "Add Python to PATH"** sebelum klik Install

Cek apakah Python sudah terinstall dengan buka Terminal/Command Prompt:

```bash
python --version
# Output: Python 3.12.x
```

## Program Pertama: Hello World

Tradisi di dunia programming adalah membuat program "Hello World" sebagai langkah pertama. Mari kita ikuti tradisi ini!

Buat file baru bernama `hello.py` dan tulis kode berikut:

```python
print("Hello, World!")
```

Jalankan dengan perintah:

```bash
python hello.py
```

Output:
```
Hello, World!
```

Selamat! Kamu baru saja menulis program Python pertamamu! 🎉

## Variabel dan Tipe Data

### Variabel

Variabel adalah "wadah" untuk menyimpan data. Di Python, kamu tidak perlu mendeklarasikan tipe variabel secara eksplisit.

```python
nama = "Putra"          # String (teks)
usia = 26               # Integer (bilangan bulat)
tinggi = 170.5          # Float (bilangan desimal)
aktif = True            # Boolean (True/False)

print(nama)   # Output: Putra
print(usia)   # Output: 26
```

### Tipe Data Utama Python

| Tipe | Contoh | Keterangan |
|------|--------|------------|
| `str` | `"Halo"` | Teks |
| `int` | `25` | Bilangan bulat |
| `float` | `3.14` | Bilangan desimal |
| `bool` | `True` / `False` | Nilai benar/salah |
| `list` | `[1, 2, 3]` | Kumpulan data |
| `dict` | `{"nama": "Bale"}` | Data berpasangan key-value |

### Cek Tipe Data

```python
x = 42
print(type(x))   # Output: <class 'int'>

y = "Bale Tech"
print(type(y))   # Output: <class 'str'>
```

## Input dari Pengguna

Python memiliki fungsi `input()` untuk menerima input dari pengguna:

```python
nama = input("Siapa namamu? ")
print("Halo,", nama, "! Selamat datang di dunia Python!")
```

Contoh output:
```
Siapa namamu? Putra
Halo, Putra ! Selamat datang di dunia Python!
```

## Operasi Matematika Dasar

```python
a = 10
b = 3

print(a + b)   # Penjumlahan: 13
print(a - b)   # Pengurangan: 7
print(a * b)   # Perkalian: 30
print(a / b)   # Pembagian: 3.333...
print(a // b)  # Pembagian bulat: 3
print(a % b)   # Sisa bagi (modulo): 1
print(a ** b)  # Pangkat: 1000
```

## Kondisi (if/elif/else)

```python
nilai = 85

if nilai >= 90:
    print("Grade A - Sangat Baik!")
elif nilai >= 75:
    print("Grade B - Baik!")
elif nilai >= 60:
    print("Grade C - Cukup")
else:
    print("Grade D - Perlu Belajar Lebih Keras")

# Output: Grade B - Baik!
```

## Perulangan (Loop)

### For Loop

```python
# Cetak angka 1 sampai 5
for i in range(1, 6):
    print(i)

# Output:
# 1
# 2
# 3
# 4
# 5
```

### While Loop

```python
hitung = 1

while hitung <= 5:
    print("Hitungan ke-", hitung)
    hitung += 1
```

## Langkah Selanjutnya

Kamu sudah menguasai dasar-dasar Python! Berikut topik yang bisa kamu pelajari selanjutnya:

- **Function** — membungkus kode agar bisa dipakai ulang
- **List & Dictionary** — menyimpan banyak data sekaligus
- **File Handling** — membaca dan menulis file
- **OOP (Object-Oriented Programming)** — konsep class dan object

Ikuti terus artikel di **Bale Tech** untuk tutorial lanjutan. Selamat belajar! 🚀

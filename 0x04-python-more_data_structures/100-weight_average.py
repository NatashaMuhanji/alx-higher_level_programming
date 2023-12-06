u#!/usr/bin/python3
def weight_average(my_list=[]):
    if not my_list:
        return 0

    m = 0
    n = 0

    for p in my_list:
        m += p[0] * p[1]
        n += p[1]

    return (m / n)

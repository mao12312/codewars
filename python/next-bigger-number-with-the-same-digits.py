
# Myanswer
import itertools
def next_bigger(n):

    res = []
    nSpt = list(str(n))
    combN = list(itertools.permutations(nSpt))
    for i in combN:
        res.append(int(''.join(i)))

    nums = list(set(res))
    nums.sort()
    print(nums)
    print(nums[nums.index(n)+1])
    return nums[nums.index(n)+1]

# bestAmswer
def next_bigger(n):
    n = str(n)[::-1]
    try:
        i = min(i+1 for i in range(len(n[:-1])) if n[i] > n[i+1])
        j = n[:i].index(min([a for a in n[:i] if a > n[i]]))
        return int(n[i+1::][::-1]+n[j]+''.join(sorted(n[j+1:i+1]+n[:j])))
    except:
        return -1


def next_bigger(n):
    nums = list(str(n))
    for i in reversed(range(len(nums[:-1]))):
        for j in reversed(range(i, len(nums))):
            if nums[i] < nums[j]:
                nums[i], nums[j] = nums[j], nums[i]
                nums[i + 1:] = sorted(nums[i + 1:])
                return int(''.join(nums))
    return -1


next_bigger(144)

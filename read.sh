#!/bin/bash
while IFS='' read -r line || [[ -n "$line" ]]; do
    $line
done < "$1"
